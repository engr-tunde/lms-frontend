const profileValue = ({data}) => {
    return (
        <div className="w-max">
            <div className="w-full p-1 ">
                <div>{data?.data}</div>
            </div>
        </div>
        
    )
}
export default profileValue;