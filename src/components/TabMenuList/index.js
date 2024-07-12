import './index.css'

const TabMenuList = props => {
  // console.log(props)
  const {id, tabList, isActive, onChangeTabId} = props
  const activeClass = isActive ? 'active-tab-text' : null
  const onClickTabBtn = () => {
    onChangeTabId(id)
  }
  return (
    <li className={`each-tab-item ${activeClass}`} key={id}>
      <button className="tab-buttons" type="button" onClick={onClickTabBtn}>
        {tabList}
      </button>
    </li>
  )
}
export default TabMenuList
