import DragAndDropFile from "@/components/DragAndDropFile";
import TitleBanner from "@/components/TitleBanner";

export default function FileUpload() {
  return (
    <div className="px-14 pt-9 flex flex-col gap-5">
      <TitleBanner />
      <DragAndDropFile />
    </div>
  );
}
