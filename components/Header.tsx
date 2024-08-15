import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[67px]">
      <Link href={"/"} className="space-x-1">
        <Image src="/assets/logo.png" width={45} height={45} alt="logo" />
      </Link>
    </header>
  );
}
