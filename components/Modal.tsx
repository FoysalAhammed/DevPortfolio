"use client";

import { useCallback, useRef, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Modal({ children }: { children: ReactNode }) {
    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {        
        router.push("/");
    }, [router]);

    const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target === overlay.current) && onDismiss) {
            onDismiss();
        }
    }, [onDismiss, overlay]);

    return (
        <div ref={overlay} className="modal " onClick={(e) => handleClick(e)}>
            <button type="button" onClick={onDismiss} className="absolute top-4 right-8">
                <Image src="/close.svg" width={17} height={17} alt="close" />
            </button>

            <div ref={wrapper} className="modal_wrapper md:bg-[url('/bg_main.png')] bg-center bg-cover lg:bg-[url('/bg_main.png')] xl:bg-[url('/bg_main.png')]  ">
                {children}
                <div className="flexBetween pb-12 pt-12 footer_copyright">
            <p>@ 2023 Developer Foysal. All rights reserved</p>
            <p className="text-gray">
                <span className="text-black font-semibold">10,214</span> projects submitted
            </p>
        </div>
            </div>
        </div>
    );
}
