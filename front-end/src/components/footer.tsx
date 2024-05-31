import DynamicLayout from "../layouts/dynamic-layout"

function Footer() {
  return (
    <DynamicLayout>
        <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold text-center text-blue-700">NeLtech</h1>
                <p className="text-sm">A perfect IT solution</p>
            </div>
            <div>Dua</div>
            <div>Tiga</div>
        </div>
    </DynamicLayout>
  )
}

export default Footer