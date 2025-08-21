import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router";
export default function SignIn() {
  return (
    <div className="bg-[#2B3C51] backdrop-opacity-100 h-dvh w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-2.5">
        <Title />
        <div className=" flex flex-col gap-6 w-[272px]">
          <form action="" className="flex flex-col  gap-2.5">
            <Input
              placeholder="E-Mail"
              className="bg-[#223041] text-[#3D5470] placeholder:text-[#3D5470]"
            />
            <Input
              placeholder="Senha"
              className="bg-[#223041] text-[#3D5470] placeholder:text-[#3D5470]"
            />
          </form>
          <div className="flex flex-col gap-4">
            <Button className="">Entrar</Button>
            <div className=" self-end">
              <Switch />
              <span className="text-white text-base font-normal pl-2">
                Permanecer Logado
              </span>
            </div>
          </div>
          <Link
            to={"/"}
            className="text-[#00FFA3] self-end text-base font-normal"
          >
            Cadastro
          </Link>
        </div>
      </div>
    </div>
  );
}
