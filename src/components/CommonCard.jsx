/* eslint-disable react/prop-types */
import { Card, CardContent } from "./ui/card";

const CommonCard = ({ children,customClass,customContentClass }) => {
    const hasBorder = customClass?.split(" ").includes("border-r-2") ? "" : "border-none"
  return (
    <Card className={`${hasBorder} cursor-pointer ${customClass}`}>
      <CardContent className={`w-full h-[300px] relative p-0 rounded-md ${customContentClass}`}>
        {children}
      </CardContent>
    </Card>
  );
};

export default CommonCard;
