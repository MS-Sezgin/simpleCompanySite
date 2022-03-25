export default function Form() {
    const Swal = require('sweetalert2')
    return (
        <div className='mainHome'>
            <div style={{ marginLeft: "20px", textAlign: "justify" }}>
                <h3 style={{ textAlign: "center" }}>İnformation</h3>
                <div>
                    <h5>Lorem Ipsum Nedir?</h5>
                    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
                </div>
                <div>
                    <h5 >Nereden Gelir?</h5>
                    <p>Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.</p>
                </div>
            </div>
            <div>
                <h3 style={{ textAlign: "center" }}>Form</h3>
                <form action="/" >
                    <ul>
                        <li>
                            <label >Name:</label>
                            <input type="text" id="name" name="user_name" required />
                        </li>
                        <li>
                            <label >E-mail:</label>
                            <input type="text" id="mail" name="user_email" required />
                        </li>
                        <li>
                            <label >Message:</label>
                            <textarea id="msg" name="user_message" required></textarea>
                        </li>
                        <li className="button">
                            <button className='button-8' type='submit' onClick={() => {
                                Swal.fire(
                                    'Good job!',
                                    'You clicked the button!',
                                    'success'
                                )
                            }} >Send your message</button>

                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}