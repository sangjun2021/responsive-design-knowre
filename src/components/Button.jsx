const Button = ({children}) => {
    return (
        <button className='border border-gray-400 w-full h-12 md:max-w-md'>
            {children}
        </button>
    )
}

export default Button;