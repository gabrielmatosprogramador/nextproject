'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { BarChart, XAxis, CartesianGrid, Bar } from "recharts";

export default function ChartOverview(){

    const chartData = [
    { month: "Janeiro", fatPrev: 186, fatReal: 80 },
    { month: "Fevereiro", fatPrev: 305, fatReal: 200 },
    { month: "Março", fatPrev: 237, fatReal: 120 },
    { month: "Abril", fatPrev: 73, fatReal: 190 },
    { month: "Maio", fatPrev: 209, fatReal: 130 },
    { month: "Junho", fatPrev: 214, fatReal: 140 },
    ];

    const chartConfig = {
    fatPrev: {
        label: "Desktop",
        color: "#2563eb",
    },
    fatReal: {
        label: "Mobile",
        color: "#60a5fa",
    },
    } satisfies ChartConfig
    

    return(
        <Card className="w-full md:w-1/2 md:max-w-150">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-600">
                        Faturamento mensal
                    </CardTitle>
                    <DollarSign className="ml-auto w-4 h-4"/>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-50 w-full">
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false}/>
                        <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                        <Bar dataKey="fatPrev" fill="var(--color-fatPrev)" radius={4} />
                        <Bar dataKey="fatReal" fill="var(--color-fatReal)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            
        </Card>
    
    );
}