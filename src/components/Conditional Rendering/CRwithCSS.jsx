import style from './CRwithCSS.module.css'

function DiscountMessage() {

    const ismember = true

    return (
        <div>
        <h1 className={ismember ? style.visible : style.invisible}> Discount Is Available</h1>
        </div >
    )
}

export default DiscountMessage;