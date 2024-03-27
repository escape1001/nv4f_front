

export default function Categories({categories}: {categories: string[]}) {
    return (
        <>
            {
                categories.map((category:string, index:number) => (
                    <span key={index} className="text-color-point">#{category}</span>
                ))
            }
        </>
    );
}
