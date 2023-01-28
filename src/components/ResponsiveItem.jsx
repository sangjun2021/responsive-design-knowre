const ResponsiveItem = ({children, className}) => {
    return (
        <div className={`grow flex flex-col gap-8 items-center ${className}`}>
            {children}
        </div>
    )
}

export default ResponsiveItem;