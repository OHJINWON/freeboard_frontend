import style from "./detail.module.css";

export default function BoardDetailUI({show, title, writer, contents, createdAt, onMouseOverLocation}) {

    return(
        <div className={style.board_box}>
            <div className={style.board}>
                <div>
                    <div className={style.user_box}>
                        <div className={style.user_box_left}>
                            <div className={style.user_profile}>
                                <img src="/profile.png" alt="프로필 사진"/>
                            </div>
                            <div className={style.user_left_imfor}>
                                <p>{writer}</p>
                                <p>Date : {createdAt}</p>
                            </div>
                        </div>
                        <div className={style.user_box_right}>
                            <div>
                                <img src="/link.png"/>
                            </div>
                            <div className={style.addressBox}>    
                                <img onMouseOver={onMouseOverLocation} src="/location.png"/>
                            </div>
                        </div>
                        {
                            show == true ? <div className={style.address}>
                            <div>
                                <p>서울특별시 영등포구 양산로 200</p>
                                <p>(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</p>
                            </div>
                            <img src="/addressBox.png"/>
                        </div> : <div className={style.address}></div>
                        }
                    </div>
                    <div className={style.titleBox}>
                        <p>{title}</p>
                    </div>
                    <div className={style.imgBox}>
                        <img src="/image.png"/>
                    </div>
                    <div className={style.contentBox}><p>{contents}</p></div>
                    <div className={style.videoBox}>
                        <div><img src="/video.png"/></div>
                    </div>
                    <div className={style.likeBox}>
                        <div>
                            <div>
                                <img src="/thumb_up.png"/>
                            </div>
                            <div>
                                <img src="/thumb_down.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}