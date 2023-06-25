export default function SkillIcon({ children, title }) {
    return (
        <div className="flex items-center p-0.5  bg-primary text-secondaty rounded">
            <div>
                { children }
            </div>
            <div className="text-sm min-w-[100px] font-semibold text-center px-2">{ title }</div>
        </div>
    )
}