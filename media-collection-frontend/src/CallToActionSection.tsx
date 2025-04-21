
import { Button } from "./button";
import { Card, CardContent } from "./card";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "./toggle-group";

export const CallToActionSection = (): JSX.Element => {
    // Plan data for mapping
    const plans = [
        {
            name: "Basic Plan",
            description:
                "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
            price: "$9.99",
        },
        {
            name: "Standard Plan",
            description:
                "Access to a wider selection of movies and shows, including most new releases and exclusive content",
            price: "$12.99",
        },
        {
            name: "Premium Plan",
            description:
                "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
            price: "$14.99",
        },
    ];

    return (
        <section className="flex flex-col w-full items-start gap-20 py-16">
            <div className="flex items-end gap-[100px] relative self-stretch w-full">
                <div className="flex flex-col items-start gap-3.5 flex-1">
                    <h2 className="self-stretch [font-family:'Manrope',Helvetica] font-bold text-white text-[38px] leading-[57px]">
                        Choose the plan that&#39;s right for you
                    </h2>

                    <p className="self-stretch [font-family:'Manrope',Helvetica] font-normal text-grey-60 text-lg leading-[27px]">
                        Join StreamVibe and select from our flexible subscription options
                        tailored to suit your viewing preferences. Get ready for non-stop
                        entertainment!
                    </p>
                </div>

                <div className="bg-black-06 rounded-[10px] border border-solid border-neutral-800 p-2.5">
                    <ToggleGroup type="single" defaultValue="monthly" className="flex">
                        <ToggleGroupItem
                            value="monthly"
                            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-black-12 rounded-[10px] [font-family:'Manrope',Helvetica] font-medium text-absolutewhite text-lg leading-[27px]"
                        >
                            Monthly
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value="yearly"
                            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[100px] [font-family:'Manrope',Helvetica] font-medium text-grey-60 text-lg leading-[27px]"
                        >
                            Yearly
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>

            <div className="flex items-start gap-[30px] self-stretch w-full">
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        className="gap-[50px] bg-black-10 flex flex-col items-start p-[50px] flex-1 rounded-xl border border-solid border-neutral-800"
                    >
                        <CardContent className="flex flex-col items-start gap-4 self-stretch w-full p-0">
                            <h3 className="self-stretch font-bold text-2xl leading-9 [font-family:'Manrope',Helvetica] text-white">
                                {plan.name}
                            </h3>

                            <p className="self-stretch [font-family:'Manrope',Helvetica] font-normal text-grey-60 text-lg leading-[27px]">
                                {plan.description}
                            </p>
                        </CardContent>

                        <div className="inline-flex items-end justify-center gap-1">
              <span className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[40px] leading-[29.2px]">
                {plan.price}
              </span>
                            <span className="[font-family:'Manrope',Helvetica] font-medium text-grey-60 text-lg leading-[13.1px]">
                /month
              </span>
                        </div>

                        <div className="flex items-start gap-5 self-stretch w-full">
                            <Button
                                variant="outline"
                                className="flex-1 h-auto px-6 py-[18px] bg-black-08 rounded-lg border border-solid border-neutral-800 [font-family:'Manrope',Helvetica] font-semibold text-white text-lg leading-[27px]"
                            >
                                Start Free Trial
                            </Button>
                            <Button className="flex-1 h-auto px-6 py-[18px] bg-red-45 rounded-lg [font-family:'Manrope',Helvetica] font-semibold text-white text-lg leading-[27px]">
                                Choose Plan
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};
