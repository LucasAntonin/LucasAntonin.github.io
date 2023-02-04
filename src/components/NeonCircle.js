function NeonCircle({ children }) {
    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative h-full w-full bg-dark-fox rounded-full">
                {children}
            </div>
        </div>
    );
}

export default NeonCircle;