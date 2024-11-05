import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const VisitChart = () => {

  return (
    <Card className='h-[250px] text-[#0A416F]'>
      <CardHeader>
        <CardTitle className='text-lg'>Visit Chart</CardTitle>
        <CardDescription>Monthly Patient visit plot chart</CardDescription>
      </CardHeader>
      <CardContent>

      </CardContent>
      <CardFooter>
        <div className="text-sm flex items-center gap-2 leading-none text-muted-foreground">
          Showing patient visit chart over the months
        </div>
      </CardFooter>
    </Card>
  )
}

export default VisitChart