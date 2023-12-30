import LoadingSvg from "@/components/UI/loading";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <LoadingSvg />
        </div>
    )
}