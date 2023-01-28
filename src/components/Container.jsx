
const Container = ({children}) => {
    return (
        <div className=" max-w-[100rem] m-auto flex justify-center items-center flex-col">
            {children}
        </div>
    )
}

export default Container;