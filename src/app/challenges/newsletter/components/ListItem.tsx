import Image from "next/image";
import iconList from "../images/icon-list.svg";

export const ListItem = ({
  itemText,
  width,
}: {
  itemText: string;
  width?: number;
}) => (
  <li className="my-2 flex items-baseline justify-start">
    <Image
      src={iconList as string}
      width={width}
      alt="List Icon"
      className="mr-4"
    />
    {itemText}
  </li>
);
