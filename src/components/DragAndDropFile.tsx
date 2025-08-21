import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import type { FC } from "react";
import {
  IoCheckmark,
  IoCloseOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";
import { uploadFileService } from "@/services/fileUploadService";
import { toast } from "sonner";

const fileTypes = ["TXT"];

const DragAndDropFile: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleChange = (file: File | File[]) => {
    if (Array.isArray(file)) {
      setFile(file[0] || null);
    } else {
      setFile(file);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);

    try {
      const response = await uploadFileService(file, "/upload");
      toast(
        <div className="text-white flex w-[330px] justify-between items-center">
          {response.message}
          <IoCheckmark className="text-[#00FFA3]" size={30} />
        </div>
      );
      console.log("Resposta do servidor:", response);
      setFile(null);
    } catch (error) {
      console.error("Ocorreu um erro:", error);
      toast(
        <div className="text-white flex w-[330px] justify-between items-center">
          Falha no envio. Por favor, tente novamente.
          <IoCloseOutline className="text-red-500" size={30} />
        </div>
      );
    } finally {
      setIsUploading(false);
    }
  };

  const dropAreaStyles = (
    <div className="bg-[#223041] flex flex-col items-center justify-center gap-5 rounded-lg h-[216px]">
      <div>
        <p className="text-white sm:text-base md:text-xl text-center font-normal ">
          {file
            ? `Nome do arquivo a ser enviado: ${file.name}`
            : "Clique ou Solte seu aquivo .txt para poder enviar"}
        </p>
      </div>
      <div className="text-[#00FFA3] flex gap-2 items-center">
        <IoCloudUploadOutline size={35} />
        <span className="">Arquivo</span>
      </div>
    </div>
  );

  return (
    <div>
      <div
        className="flex flex-col gap-5
      "
      >
        <FileUploader
          children={dropAreaStyles}
          multiple={false}
          handleChange={handleChange}
          name="file"
          hoverTitle={"Solte Aqui"}
          types={fileTypes}
        />
        <div className="self-end">
          <button
            onClick={handleUpload}
            disabled={!file || isUploading}
            className="px-28 py-2 bg-[#00FFA3] text-black text-base font-normal rounded disabled:bg-gray-400"
          >
            {isUploading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DragAndDropFile;
