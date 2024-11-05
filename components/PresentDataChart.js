import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  const PresentDataChart = () => {
  
    return (
      <Card className='h-[250px] text-[#0A416F]'>
        <CardHeader>
          <CardTitle className='text-lg'>Today's Data Chart</CardTitle>
          <CardDescription>Current Patient Chart</CardDescription>
        </CardHeader>
        <CardContent>
  
        </CardContent>
        <CardFooter>
          <div className="text-sm flex items-center gap-2 leading-none text-muted-foreground">
            Showing current patient chart
          </div>
        </CardFooter>
      </Card>
    )
  }
  
  export default PresentDataChart