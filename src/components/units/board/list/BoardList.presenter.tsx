import styles from "./BoardList.module.css"
import {getDate} from "../../../../commons/libraries/utils"
import { IBoardListUI } from "./BoardList.types"
export default function BoardListUI (props:IBoardListUI) {
    console.log(props)
    return(
        <div className={styles.container}>
            <div className={styles.containerBox}>
                <div>
                    <div className={styles.titleBox}>
                        <h1>베스트 게시글</h1>
                    </div>
                    <div className={styles.imageBox}>
                        {
                            
                            props.data?.fetchBoards.slice(0, 4).map(data => 
                                <div key={data._id}>
                                    <div className={styles.image}>{data.images}</div>
                                    <div className={styles.title}>{data.title}</div>
                                    <div className={styles.aa}>
                                        <div className={styles.column}>
                                            <div className={styles.column_writer}></div>
                                            <div className={styles.column_createdAt}></div>
                                        </div>
                                        <div className={styles.column_right}>
                                            <div className={styles.column_img}></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className={styles.serch_box}>
                        <input className={styles.serch_box_title} type="serch" placeholder="제목을 입력해주세요"/>
                        <input type="date" placeholder="달력"/>
                        <button>검색하기</button>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            props.data?.fetchBoards.map(data => 
                                <tr key={data._id} id={data._id} onClick={props.onClickDetail}>
                                    <td> 
                                        <p>{data._id}</p>
                                    </td>
                                    <td> 
                                        <p>{data.title}</p>
                                    </td>
                                    <td>
                                        <p>{data.writer}</p>
                                    </td>
                                    <td>
                                        <p>{getDate(data.createdAt)}</p>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    )
}