import * as React from "react";

function SvgLogoNew({
    width = "400px",
    height = "300px",
}: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 975.52 201.42"
            width={width}
            height={height}
            // {...props}
        >
            <defs>
                <style>{".logo-new_svg__cls-1{fill:#e5c289}"}</style>
            </defs>
            <g id="logo-new_svg__Layer_2" data-name="Layer 2">
                <g id="logo-new_svg__Layer_3" data-name="Layer 3">
                    <path
                        className="logo-new_svg__cls-1"
                        d="M35.19 201.42C23 201.42 12 199.59 2.53 196L0 195l2.75-7.34 2.58 1a71.45 71.45 0 0026.4 5.07c5.16 0 8.36-2 10.07-6.31 2-5 3-13.43 3-25V9.31h-26v-8.2h54.68v161c0 15.58-3.22 25.81-9.84 31.3-6.38 5.33-15.95 8.01-28.45 8.01zM535.96 200.31V1.11h28.41V192.1h82.21v8.21H535.96zM738.38 201.42c-11.8 0-22-1.1-30.31-3.27a65.11 65.11 0 01-24-12.27C668.73 174 660.92 150 660.92 114.55V1.11h28.41v113.16c0 32.74 4.89 54.76 14.53 65.45 4.81 5.16 9.9 8.74 15.09 10.61s11.84 2.88 19.43 2.88c17 0 30.22-6.05 40.38-18.51s15.31-32.79 15.31-60.43V1.11h9v113.44c0 29.49-6 51.55-17.8 65.56s-27.69 21.31-46.89 21.31zM945.98 200.31l-54.18-93.07-46.94 93.07h-9.69L886.6 98.58 830.16 1.11h29.54l45.88 78.96L945.6 1.11h9.4l-44.23 87.88 64.75 111.32h-29.54zM403.83 0a96.64 96.64 0 00-74.49 35.22h20.73c14.43-15.87 33.37-26.78 53.76-26.78 44.51 0 75.23 36.5 75.23 92.27S448.34 193 403.83 193c-56.27 0-75.15-68.32-89.13-101.81C299.23 54.1 276 0 205.59 0c-54 0-103.42 35.22-103.42 100.71s49.41 100.71 103.42 100.71a96.64 96.64 0 0074.51-35.23h-20.73C244.94 182.06 226 193 205.59 193c-44.5 0-75.22-36.51-75.22-92.27s30.72-93.65 75.22-93.65c55.69 0 74.84 71.83 89.08 105s39.91 89.34 109.16 89.34c54 0 103.44-35.23 103.44-100.71S457.84 0 403.83 0z"
                    />
                    <path
                        className="logo-new_svg__cls-1"
                        d="M292.63 147a100.34 100.34 0 01-12.54 19.21l-23.42 18.23 2.7-18.23a107.06 107.06 0 0023-39.93c.22-.76.47-1.51.7-2.24zM352.77 17l-2.7 18.23a107.06 107.06 0 00-23 39.93c-.34 1.09-.67 2.12-1 3.16l-9.63-23.15a100.92 100.92 0 0112.9-19.94z"
                    />
                </g>
            </g>
        </svg>
    );
}

export default SvgLogoNew;
