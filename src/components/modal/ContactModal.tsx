

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    
}
const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(89,89,90,0.5) z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full pb-2 p-6">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
                </div>
                <div className="mt-4">{children}</div>
                <div className="mt-10 flex justify-end gap-2">
                    {/* <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
                    >
                        Close
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Modal;
