import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function VideoDetailsDialog({
  info,
  isOpen,
}: {
  info: VideoInfoResponse | null;
  isOpen: boolean;
}) {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{info?.title}</DialogTitle>
          <DialogDescription>Length: {info?.duration}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
