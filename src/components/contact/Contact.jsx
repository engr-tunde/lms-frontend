const Contact = ({IconComponent, detail}) => {
    return (
        <div className="w-full flex gap-1 items-center">
            <div className="text-blue-800">{IconComponent}</div>
            <div>{detail}</div>
        </div>
    )

}
export default Contact ;