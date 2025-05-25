"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  ImageIcon,
  Quote,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
} from "lucide-react";

interface WysiwygEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function WysiwygEditor({
  value,
  onChange,
  placeholder,
}: WysiwygEditorProps) {
  const [isPreview, setIsPreview] = useState(false);

  const formatText = (command: string) => {
    document.execCommand(command, false, undefined);
  };

  const insertList = (ordered: boolean) => {
    const command = ordered ? "insertOrderedList" : "insertUnorderedList";
    document.execCommand(command, false, undefined);
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="border-b border-gray-200 p-2 bg-gray-50">
        <div className="flex flex-wrap items-center gap-1">
          {/* Formatting */}
          <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("bold")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("italic")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("underline")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <Underline className="h-4 w-4" />
            </Button>
          </div>

          {/* Lists */}
          <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertList(false)}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertList(true)}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
          </div>

          {/* Alignment */}
          <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("justifyLeft")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("justifyCenter")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <AlignCenter className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("justifyRight")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <AlignRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Insert */}
          <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("createLink")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <Link className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("insertImage")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("formatBlock")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <Quote className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("formatBlock")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <Code className="h-4 w-4" />
            </Button>
          </div>

          {/* Undo/Redo */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("undo")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("redo")}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <Redo className="h-4 w-4" />
            </Button>
          </div>

          {/* Preview Toggle */}
          <div className="ml-auto">
            <Button
              variant={isPreview ? "default" : "outline"}
              size="sm"
              onClick={() => setIsPreview(!isPreview)}
              className="h-8 px-3"
            >
              {isPreview ? "Éditer" : "Aperçu"}
            </Button>
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="min-h-[200px]">
        {isPreview ? (
          <div
            className="p-4 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{
              __html: value || "<p>Aucun contenu à prévisualiser</p>",
            }}
          />
        ) : (
          <div
            contentEditable
            className="p-4 min-h-[200px] outline-none focus:ring-0"
            style={{ minHeight: "200px" }}
            onInput={(e) => onChange(e.currentTarget.innerHTML)}
            dangerouslySetInnerHTML={{ __html: value }}
            data-placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
}
