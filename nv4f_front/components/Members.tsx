export default function Members({members}: {members: string[]}) {
    return (
        <>
            {
                members.map((member:string, index:number) => (
                    <span key={index} className="text-small bg-color-light px-2 py-1 rounded">{member}</span>
                ))
            }
        </>
    );
}
