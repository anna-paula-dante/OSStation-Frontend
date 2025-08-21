import { IoCloudUploadOutline, IoReaderOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen ">
      <div className="flex flex-col md:flex-row gap-10 px-20 py-20">
        <div
          onClick={() => navigate("/home/update")}
          className="w-72 py-20 flex flex-col justify-center items-center gap-2 rounded-4xl bg-[#3D5470] hover:bg-[#00FFA3] "
        >
          <h2 className="font-bold">Upload de Ordens</h2>
          <IoCloudUploadOutline size={70} />
        </div>
        <div
          onClick={() => navigate("/home/orders")}
          className="w-72 py-20 flex flex-col justify-center items-center gap-2 rounded-4xl bg-[#3D5470] hover:bg-[#00FFA3]"
        >
          <h2 className="font-bold">Pedidos</h2>
          <IoReaderOutline size={70} />
        </div>
      </div>
    </div>
  );
}
