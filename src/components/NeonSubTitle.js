function NeonSubTitle({ children, className }) {
    return (
        <h1 className={`${className} font-extrabold mb-5 text-transparent text-xl sm:text-2xl bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600 text-center`}>
            {children}
        </h1>
    );
}

export default NeonSubTitle;