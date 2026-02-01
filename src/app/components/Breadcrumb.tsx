interface BreadcrumbProps {
    items: { label: string, link?: string }[];
    current: string;
}

const Breadcrumb = ({ items, current }: BreadcrumbProps) => {
    return (
        <div>
            <nav>
                <ol className="breadcrumb mb-1">
                    {items.map((item, index) => (
                        <li key={index} className="breadcrumb-item">
                            {item.link ? (
                                <a href={item.link}>{item.label}</a>
                            ) : (
                                item.label
                            )}
                        </li>
                    ))}
                    <li className="breadcrumb-item active" aria-current="page">{current}</li>
                </ol>
            </nav>
            <h1 className="page-title fw-medium fs-18 mb-0">{current}</h1>
        </div>
    );
};


export default Breadcrumb;
