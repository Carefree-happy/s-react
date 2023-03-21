import BasicTributeExample from "./examples/BasicTributeExample";
import ControlledTributeExample from "./examples/ControlledTributeExample";
import CustomTributeExample from "./examples/CustomTributeExample";
import RefTributeExample from "./examples/RefTributeExample";
import DynamicDataTributeExample from "./examples/DynamicDataTributeExample";
import PromiseDataTributeExample from "./examples/PromiseDataTributeExample";
import "./foundation.min.css";

export default function App() {
    return (
        <>
            <div>
                <div className="row">
                    <div className="large-12 columns">
                        <h1>Tribute Demo</h1>
                    </div>
                </div>

                <BasicTributeExample />
                <ControlledTributeExample />
                <CustomTributeExample />
                {/* 下面的文件存在问题 */}
                <RefTributeExample />
                <DynamicDataTributeExample />
                <PromiseDataTributeExample />
            </div>
        </>
    );
}
