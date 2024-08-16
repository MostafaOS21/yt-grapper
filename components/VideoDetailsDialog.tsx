import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export default function VideoDetailsDialog({
  info,
  isOpen,
  setIsOpen,
}: {
  info: VideoInfoResponse | null;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(val) => {
        setIsOpen(val);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{info?.title}</DialogTitle>
          <DialogDescription>Length: {info?.duration}</DialogDescription>
        </DialogHeader>

        <Image
          src={info?.thumbnail || ""}
          width={800}
          height={450}
          alt="thumbnail"
          className="w-full rounded"
        />

        <Card className="bg-background p-3">
          <CardContent className="flex flex-col items-center space-y-3">
            <p className="text-center text-lg font-semibold">{info?.title}</p>

            <Tabs defaultValue="video" className="w-full">
              <TabsList>
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="audio">Audio</TabsTrigger>
              </TabsList>
              <TabsContent value="video">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select resolution" />
                  </SelectTrigger>
                  <SelectContent className="bg-background w-full">
                    {info?.videoQualities.map((quality) => (
                      <SelectItem
                        key={`${quality.quality}:${quality.mimeType}`}
                        value={quality.url}
                      >
                        {quality.quality} - {quality.mimeType.split(";")[0]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TabsContent>
              <TabsContent value="audio">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select resolution" />
                  </SelectTrigger>
                  <SelectContent className="bg-background w-full">
                    {info?.videoQualities.map((quality) => (
                      <SelectItem
                        key={`${quality.quality}:${quality.mimeType}`}
                        value={quality.url}
                      >
                        {quality.quality} - {quality.mimeType.split(";")[0]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
