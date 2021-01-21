
import './App.css';
import List from './demo/list'
import LifeCycle from './demo/lifrcycle'
let datas = {
    family: {
        title: '家人',
        list: [
            { name: '爸爸' },
            { name: '妈妈' }
        ]
    },
    friend: {
        title: '朋友',
        list: [
            { name: '张三' },
            { name: '李四' },
            { name: '王五' }
        ]
    },
    customer: {
        title: '客户',
        list: [
            { name: '阿里' },
            { name: '腾讯' },
            { name: '头条' }
        ]
    }
};
/**
 * 1.组件之间通信 props父级向子组件传递值
 * 2.函数式组件，类式组件
 * 3.插值表达式
 * 4.组件要大写，标签要小写，react中标签都要默认闭合
 * 5.react中不能使用for while 
 * 6.jsx不支持语句，只支持表达式（表达式是有返回值的是表达式）
 * 7.jsx:js+xml  语法糖
 */
// static function getDerivedStateFromProps(props, state) {

// }
function App() {
    let isShow = false;
    return (
        <div className="friend-list">
            {/* 内部渲染好友列表 */}
            {/* {Object.keys(datas).map((v, loc) =>
                <dl key={loc}>
                    <dt key={loc}>{datas[v].title}</dt>
                    {datas[v].list.map((item, index) => <dd key={index}>{item.name}</dd>)}

                </dl>)} */}

            {/* end */}
            {isShow ? <div>
                {Object.keys(datas).map((item, index) => <List key={index} data={datas[item]} ></List>)}
            </div> : <LifeCycle data={datas}></LifeCycle>}
            {/* 组件部分的 */}
            {/* <List data={datas}>123</List> */}
        </div>
    );
}

export default App;
