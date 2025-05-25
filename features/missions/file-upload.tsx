"use client";

import type React from "react";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X, FileText, ImageIcon, File } from "lucide-react";

interface FileUploadProps {
  onFilesChange: (files: File[]) => void;
  acceptedTypes?: string[];
  maxSize?: number; // en MB
  multiple?: boolean;
}

export function FileUpload({
  onFilesChange,
  acceptedTypes = [],
  maxSize = 5,
  multiple = false,
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleFiles = useCallback(
    (newFiles: FileList | null) => {
      if (!newFiles) return;

      const fileArray = Array.from(newFiles);
      const validFiles = fileArray.filter((file) => {
        // Vérifier le type
        if (acceptedTypes.length > 0) {
          const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
          if (!acceptedTypes.includes(fileExtension)) {
            alert(`Type de fichier non autorisé: ${fileExtension}`);
            return false;
          }
        }

        // Vérifier la taille
        if (file.size > maxSize * 1024 * 1024) {
          alert(`Fichier trop volumineux: ${file.name} (max ${maxSize}MB)`);
          return false;
        }

        return true;
      });

      const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(updatedFiles);
      onFilesChange(updatedFiles);
    },
    [files, acceptedTypes, maxSize, multiple, onFilesChange]
  );

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension || "")) {
      return <ImageIcon className="h-5 w-5 text-blue-500" />;
    }
    if (["pdf"].includes(extension || "")) {
      return <FileText className="h-5 w-5 text-red-500" />;
    }
    return <File className="h-5 w-5 text-gray-500" />;
  };

  return (
    <div className="space-y-4">
      {/* Zone de drop */}
      <Card
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          dragActive
            ? "border-orange-400 bg-orange-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-900">
            Glissez vos fichiers ici
          </p>
          <p className="text-sm text-gray-500">
            ou{" "}
            <label className="text-orange-600 hover:text-orange-700 cursor-pointer font-medium">
              parcourez vos fichiers
              <input
                type="file"
                className="hidden"
                multiple={multiple}
                accept={acceptedTypes.join(",")}
                onChange={(e) => handleFiles(e.target.files)}
              />
            </label>
          </p>
          <p className="text-xs text-gray-400">
            {acceptedTypes.length > 0 &&
              `Types acceptés: ${acceptedTypes.join(", ")} • `}
            Taille max: {maxSize}MB
          </p>
        </div>
      </Card>

      {/* Liste des fichiers */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">
            Fichiers sélectionnés ({files.length})
          </h4>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  {getFileIcon(file.name)}
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
