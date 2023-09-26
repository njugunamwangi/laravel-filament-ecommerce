import {TwelveDotsScaleRotate} from "react-svg-spinners";

export default function Loading() {
    return (
        <>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base">
                        <TwelveDotsScaleRotate />
                    </p>
                </div>
            </main>
        </>
    )
}
