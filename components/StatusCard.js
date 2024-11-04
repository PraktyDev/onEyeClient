import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ChartAreaIcon } from "lucide-react";

const StatusCard = (props) => {
  return (
    <Card className='basis-1/3'>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>
            <span className="flex items-center gap-4">
                <span className="bg-slate-200 rounded-full p-3">{props.icon}</span>
                <span className="text-xl font-semibold">{props.title}</span>
            </span>
            <ArrowRight />
        </CardTitle>
        <Separator />
        <CardDescription className='flex justify-between items-center'>
            <span className="flex flex-col gap-1 items-start">
                <span className="text-2xl font-semibold">{props.number}</span>
                <span>{props.desc}</span>                
            </span>
            <span><ChartAreaIcon/></span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default StatusCard;
