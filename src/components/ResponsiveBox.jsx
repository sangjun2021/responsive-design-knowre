const ResponsiveBox = ({children}) => {
    return (
        <div className="flex flex-col gap-y-4 px-4 items-center md:flex-row md:p-10 md:items-stretch">
            {children}
        </div>
    )
}

export default ResponsiveBox;