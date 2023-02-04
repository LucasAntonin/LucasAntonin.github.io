function NeonTitle({ children }) {
    return (
        <h1 className="font-extrabold animate-pulse mb-5 text-transparent text-4xl sm:text-6xl bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 text-center">
            {children}
        </h1>
    );
}

export default NeonTitle;