import React, { forwardRef } from 'react';

const CircleEdit = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      width="18"
      height="18"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="16"
        cy="16"
        r="15"
        fill="#E5E7EB"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      <path
        d="M16.0208 9.22574C16.2067 8.82492 16.6817 8.65204 17.0818 8.83958L20.525 10.4538C20.9251 10.6414 21.0987 11.1183 20.9128 11.5191L16.1461 21.7962C16.0555 21.9913 15.8904 22.1415 15.6878 22.2128L13.1831 23.094C12.7735 23.2381 12.3233 23.027 12.1698 22.6189L11.2312 20.1235C11.1554 19.9217 11.1636 19.698 11.2541 19.5028L16.0208 9.22574Z"
        fill="#9CA3AF"
      />
      <path d="M12.667 9.56641L22.2024 14.0401" stroke="#E5E7EB" />
    </svg>
  ),
);

CircleEdit.displayName = 'CircleEdit';

export default CircleEdit;
