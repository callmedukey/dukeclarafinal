import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PopupDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const copyCPF = () => {
    navigator.clipboard.writeText("043.930.355-93");
    toast.success("CPF copiado com sucesso!");
  };
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Obrigado pelo Recado e Carinho!</DialogTitle>
          <DialogDescription>Os dados bancários do pix:</DialogDescription>
        </DialogHeader>
        <p className="text-center">CPF: 043.930.355-93</p>
        <DialogFooter className="sm:justify-center">
          <Button type="button" variant="default" onClick={copyCPF}>
            Copiar CPF
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="outline" onClick={onClose}>
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupDialog;
