import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface ConfirmationModalProps {
  action: string;
  onClick: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  action,
  onClick,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="mt-2">
        <Button size='sm' onClick={() => console.log(action)}>{action}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col items-center w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="w-full">
          <AlertDialogCancel className="w-1/2">No</AlertDialogCancel>
          <AlertDialogAction className="w-1/2">Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmationModal;
