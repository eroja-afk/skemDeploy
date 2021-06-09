import { Container, Col, Row, Card, Button, Form, Navbar, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, Component } from "react";
import { Link } from 'react-router-dom';
import DataComp from '../DataComponent';
import axios from 'axios';
import '../App.css';
const Controller = require('./AxiosController')

function Dashboard (){

  // useEffect(() => {
  //   getAllTargets();
  // }, []);


  const [data, setData] = useState([]);
  var datas =[]
  var targets =[]
  //const [targets, setTarget] = useState([]);

  const [status, setStatus] = useState("");

  const createTarget =  (event) => {
    // Prevent default behavior
    event.preventDefault();

    const data = new FormData(event.target);
    // Access FormData fields with `data.get(fieldName)`
    // For example, converting to upper case
      console.log("Datas - " + data.get('image_name') ," - " + data.get('author')," - " + data.get('image'));
      axios({
          method: 'post',
          url: 'https://skem-api.vercel.app/api/createTarget',
          data: {
            author: data.get('author'),
            name: data.get('image_name'),
            image: data.get('image')
          },
          responseType: 'json'
        })
        .then(function (res) {
          


          let details = [];

            for (var i = 0; i < Object.keys(res.data.message).length; i++) {
                details.push({ name: i, value: res.data.message[i] })
            }
            console.log("fjhdhfjdhfj" + i);
            console.log(datas);
          //   setDatas(details);
             return(details)
        });
          
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className="App">
      <Navbar className="bg-light justify-content-between">
        <Navbar.Brand>PC Builder</Navbar.Brand>
        <Link to="/">
        <Button variant="danger" onClick={handleShow}>Logout</Button>
        </Link>
      </Navbar>
      <br />
          <Container>
            <Button variant="primary" onClick={handleShow}>Add Image</Button>
            <br />
            <br />
            {/* Add Modal  */}
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={createTarget}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="Enter Image" name="image" value="/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAgEBAQEBAgEBAQICAgICBAMCAgICBQQEAwQGBQYGBgUGBgYHCQgGBwkHBgYICwgJCgoKCgoGCAsMCwoMCQoKCv/bAEMBAgICAgICBQMDBQoHBgcKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCv/CABEIALwBPgMBIgACEQEDEQH/xAAdAAEAAQQDAQAAAAAAAAAAAAAACAECBgcDBQkE/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABn8AAAAAAAAAAttOQAAAAAAAAAAAAAAAC27Rxu+7Tu4hbdjh0cc+uz4k7UAAAAAAAAAAAAABYXtYbNEMpmRVOnmHDiU5doHik8RckDFqZBfXh0Wb2pDnW56I3WXgAAAAAAAAAACOEj+mIzSejFlpsXDNeSsIQZxtbaRfXktPN7esn/rIq7xzuhEeRGi+/JC1jP9RI1HaO56H3wxmeVAAAAAAAAAtuEYcX7/PzRs18GzsqAABSosrcKW36gMO5sN7IlPf0XegAAAAAAAAAGmvp2d5qHpwg10xP555diT8QM+knTWBWOHovTzF7A9LK6G7E3R8mN6cNqx0w2ep8/wBtKgAAAAAAAAAHUQZlxDM2b8EaMgN09nrDOjsuj21kZGjGt+R6OmpgWWGW6em5FM0j6vRInWZ7cqAAAAAAAAAAAccaN5xgO8gJ69doeUva+qfKeWvR+sg8fe09bPjPMTZ8w8lLuzvqaS6jfOtzZfPA6eJUAAAAAAAAAC27jIvyfj7IcUr8Z9VkHfkJ336i26ACw49KZ/FwzbApIbJNXbUVAAAAAAAAAAHHyWkcpG6F+s3j87lIG5vLmhyXYX1Bsnj1r8xdhm6+7I5bRz64tuAAAAAApUAAAAAAtxrJxorj3yNL9/skY3kN9C2+lQAAAAAAABSoAAAAAAAAAUqKVAAAAAAAAAD/xAAtEAAABgICAQMDAgcAAAAAAAABAwQFBgcAAggRQBASEyAhUBYwFBUXGDFBcP/aAAgBAQABBQL877vwXf02NP2WuIvxbnk3sF4/A39ZC2soDRc7X2JXHpJ5OzQ9keWh3n7PxNjP8jqf8B/vkEhPsqy+GSgwIFkkkrLEWaPRt8uR/wCWD0oR13EGFPFov6e77/IHfkiOLbTYG+yg++DlP9Te2uNOwts8kUlZ4kzRdidrregANdZvuZYHJwPsG5mpYTDkZWsTUPcw5Bzds4rxuUyea6h15PIAJRHSeQ4FuEEaHJM8NVmyouFQHj3FjItU0fk7TXHJtvZHS9ZtpprpqOROzkkAuUbcuKcGa0LMZufEa2g8FTco5O4Kk0Gh7VBIsHQZ3ned57wHA8R8Z0cgaKfRnyyluM7+Y71TyZWqJGoTpy0xM5pOvbFeE6cpKTnWA3ItTw16zr0bo2veOUD+z8jTH3SKcm1Gw1/f6jP6RWOrG4WRrgJfG+op1H3DxBxq6hvJKLvCWq+QFVLT7bvsP2Os9udZ1g5cdxK44qqOi0MN268bkaZ+mHK2qZjdvoq+r2P1rHP3LesJRCGZmgM6qchde9jRdPHJA2ypj8W/Y8ElqOj5P+ras+rv07z3ff1MIJMMnFiRGu2shvnXI5ahQpW1H4q1MWsS13NrQpd6Uc3GHUT+cI5/e09nbjyhsJfmt720eGtuXWoA6zL62xdc1ooE53IZ73S1XyNnCmZLuStLNx7PyCp98FJPIUu2vy2pNX6Okqinj9Mw1AAAOvGdHlpZSotFqus2xlNWcTkeGRrhslz5eGKXcs3jWZqcfS5KY7WEKABmjatOtreuVeHRDjEzZu78SkAuz/XCtleq7mbzu5xOQRw2gH6LP9c9Z149i1nE7MbayqOtDqqCcVsnMR2U1mYlsWThs12DcqsWx7v1UWeZf5pUiKvr4ZIEmDY/4zzWtxs1NtK3jkIy1Yrs++dlMYgdNy4K5jMJi0Z8jcOw4yKiiofacLMt9CRJwIFJJm7YrSfo0Ia222JgU2O1vwHx6vXPGqNQBDmutea7wXj7WtpNjK0JWJpEvQctHeloumgtvUGkQlKClBXjy2VscKYktaPs1XQ2HtEHjJbCykiCNIAAUUAfASGCnJ3z+FT9GsjOeK+ra5dFjOwMceTeihGmWayyoK1lqPjm8OjBa3jd9ZMEYWxdGheumvp7gz3YA9h9JpoFaI+RtQKkr1yyrFHi9RyHvHWrKmjVVMoB142w9Zx91F1bfRaZ8KWuH+/LgQ3DCH6GRGj2aQsVY/R31kynMZgjQsujjhK01atjRtGvaHkbB7s48KRbW30PJKUEuVV3DSkhhdbWJYcq9O8EwNcf7lg7IYod71nZbVxnhhquJ1dAYNt15PX3sOCSVFIorfEIeNyzyjtc/wA4I66g9WFCY7ubZBSgnQ+1HtOFVJHQljjEcjKf2YAdeZ1kgh0VlZO/HyDEhrRXsxNSyMrE9TQYoWqIRVjz2hnt/wCGf//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8BcP/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8BcP/EAFgQAAAEBAEHBAsKCwIPAAAAAAECAwQABQYREgcTITFBUWEUInGRCBAVIzJAgZKhscEgJCVCUmJygqKyFhcwM0NQU2PC0dKz0zQ1REVUVXBzdJWjw+Hj8P/aAAgBAQAGPwL9e6v1OvUk5XAMBe8I35yx9hQioZvUszWVbgZPk6BvASMOK4F8lv1EedSrDy1dwRBpjLcAEdIj1AMM6jmwp8rE6ibjNFsGIpv5W7bioZ+8Kg1bExKHOPUAbxHdExy0ZRGyjZhL2C56ekqwWEoYdCqgbx9gQlMjj3yaOjuR4B4AB9n0/qKnslLPFhRQVfPRKOgAtYv3R86JpLFdbacm5u66ZP5D2l6gqB8Rs1bkuoqceoOIjuhCvcoMrUayVofFIZE4Dw/36xdo7g2W60KVl4XXnT9NuQobQAcVuvCHlhhTrUOYzakSC/AO3aLX07vG2+TB4mqm8dM8+3XMHez+FzOnmjF+1VuU3DdukqWWMDcCWx+ovXFd0zhwghOMZC8M4oHqtC8+qB8Ru2blxHUOPoDePCEMoVcsTISJqfHT8lVD84P7dYNOLgHDrsARI6SLzmlPIcrch8/wv7v09oTHMAAG0Rg0tSmR5m+DQDOWEzhr7r6ghR/L5M2pCTgnnDvnqt183p2bOi22HOUOZzx6szZ4kiqrKm98nHZp2Br6fGpZlPpt6qJJAuJ37AFRAiyJrANwDXaJLlZkAAdSUPW70ixdYomto6xLDabsz4knSBVkx+aYLhE1qY5gAWzQ2avtUHmkDzhCJW1c/n3aYul991OcH2bRU6M7dJtmcybZ7lK5sIFEAKf+uD1BVsvVRpiTuRCUsFQsDxUP05gEOcXTo2emMJQ0bO1V9R1dKH7h4q8FBJFo3uIEx2vp+aBYBvk1yVqM0hH/ABlP+YUOgv8A5GAd5Zco7l6nrCWSzvSIcNWn1wDamadbtra1cF1B6TDpiV5I6cG76oHJQWtpwo3tp3XNpvuIMNKYk5LItkrYtpzbTDxEYt7iwD4q5kkxTxoO0DJKl3gIWibZLJ1odSw7mVq4tmsSG6Odo+jDOXOh99SpVRk6THWQSG0B5top7JFLLitO5kU7jD8VEo6/b9SCIIlsUhQKUA3BDee1VKTLLt08FyLCTOFvexra9vXBW6BMJCFsQu4O2Z0DVPOKfnFM2FzdMaO3MagnEuVzErk5AlixkhwGE2vTv56gQ6XpqrJCkwMsYWqLlubEUl9F9A7IxOsp0lQ+ahLcXrCO+5dEUeCEgT9sXnGXqcm0f5G0TR9UBK1srdVzeeOChyeXpP8AeOs1gHq1x+HVbzV0mKiIlby47kTDYdp7+rxZ/KdSNUSorlO+rPpXAQD6oXie0tOFAbsaiAr1gqcebjsOIPKOLzQ3xNMpuD4Nk6ItJcbYOsAHyhiN9b8snQNBtuXVG+LZMhdJWwfLNx4QNWVat3TqJ0ONw7V5wJCOwn8/F6UylFCwSmcgm5OGxFTwvV6YahNXarddoYRQdN7XwjrLp2aoTpqnUjZoo4lFVBudU+0xuP5VFjI2J3c6mpxQk7Qhb4lNph4Be8JVNJaSTqqfTI5jTt4q9Kmcl/ikxbINMq1yGvGrNILrOG0xIrhDfa2ryw1qKTqids8RBREwlsNh4eLTtiBbnTa8oTt8pPn+z0xJ5sdXGoDQElzfPJzR9Xu9fbt7gqqiRRMTwTCXSHRAzSp5oRELd7RDSorwAu2EntRtF5LR5D40mWLCtMN2Lh/9xhOXsUSpIokAiSZA0FAPFlGa5MRFSCU5d4RNKGRlKDlhKXR3D5BwbCfNfKTG+0AAdsWaUI7PxO7KX2DHvbJz580/9cYEKBaEvtUmI/0wBmP4INAENTqYGEfQIRdOrcnpeHLzB6zxZGt8nwcQmQe00CI1vSmjY0eNhv55wgV5zWbhIhfCOwRly3/cgVEcsU7KpsIem2oX8oGhElZV+2CVX7/3QalIbD83AGuAQWrVM4iW90GyqgdZSwYGddM08P8Apgih/aAEYWVXSxYR1Am+TH2w1llG06s7ezK4IusyJ00+i2s3CPxgZXpJyggkxI90z98KpfQIE2eWLB4uVxN5kg2IY2EpnCoEAR8sVTVeUOcIuEyTQEmBFpjmiiQA4CAiGoIz7qYSrX/r8fYeO+vZSb6MzVN6jRmk2rJU2wCkcKXj4OyaFcBsNyQqYf8AVOWDGaZGpSHF7MJeUPsrHN6IEjLJzk8QNbRn5tnPuoBB013VANBva7GmF3Ah5w+yBLOMoKli6wllCGS+0CYx8J1PU6o/8Fm/WnBQSpmoHmHWJlLYunnhCDiiexseO2ygiUXThI5dPAxMV9YbYBxI8jswlxPkJlWPfz4IFSyB8zIJtIrNhIPkvrhm3pl26cIy73ucz0gY8YABv4g8ZSYVW1UUI2OKiIpKiQSja2yJhlAqSlHEzUbOXOaQScKAJkyDYAsUQ46Y+C+x2KOnm8pmKyn8MYmXYwy9T6LU5v4IA8q7FdmXj3HOPpzcADDscmaY/vEsz960d8yUSFpp1LzP+kBi7aW0e3H965cqW6iFge6OVelpQGsRRQtbyqXgzifdkfK3gfGbozNYgD9VEI5RJaPbTs4aM5yd+qF/rGgvcrI3JGpx8A6kjAo9ahola8kkDMs1zhgmJJegVTNE+JhKNwvbXa8C0rGq5zKUR/OrjKsOHzShCb6tsvyr82LnIuXPJ/7bTCbKgSIcgUMKgLN1s4Co6sWK431ejxm2+JnTCwCVxK565RXKYd5rh7YJVFFZUjs2LJNQiyTZMRIY5BG46DFG+zyRg/GfUBPnJoj/AH0AJ8vlVJj+zBkp7Fow/jYr9b/c837ykZ3u/lEc2/azgqYX+qAwIP3c/BIRteYVU5U68KIxnPwzljO+053ixvSkEd67IRNpxaSNcB69AxZ12Tc6ULb9EwcB7YPNpdlOncyQTXzapjFzfPsA6lC7hDTDaTMxOKTVuRFMVDXHCULBeNJb9MIzjKTT8tEFj5tFVWVgqYR120FEYSkVI1DL2CInEU2xiCiFx+kAQVZFQpyGC5TlG4D4w4qOoXoINm5eca1x4AAbRhfKPkvrZxJZdVKRTzJo4bWV1iAmLu226Ya0rJUxBs1Twhj1nHaYeIjpjElKW5ehEIsDYlvoRYEwtFwTDqjnJFHpCMOZLbdaLrStuf6SJRjuhMaIlaytrYlWJB9kCykEnaskRNiMk0blTKJt9i7dAdvA6bkUANQHIAwo1nFKsgE4f4QikCaheIGCJzkylE7WmcibpqC3WUuIJGKJbdG0PJ4w1olxZSTU0iV3NEtirg982QegLD5RjCULAGoA9xq92Kg/FC42COUK1am2OAiB27pMxFCCA2sJbRmKeK+nDgfBRaNTBfymtHc9tLApWSK6FFFrgsoT1j5LQMtkhTKLLDidvFfDWH2Bwi3i8+rRwACrNqhcGKf92SxCB9ke2ornAJhTEcY6i6NcPXUryisJczaPjI8oTl4HOpYAHQA/FsIQrP6vy0zt89OObYtWvvcqyo7MJb3iWMapeLKvRTFRXPnuYmIbgXTuD3Sk4qeaEbpkDQW9zn4FDWMd2ZnRSbuYHOJEmaknKdwqOsAuG+++G84Qydt6fWXATCxBEgHT02C9gDYAeNTuhHdiO5PPHAClfTmjjjIfoG49XbM3WJiIctjl3hDid5Gzd0JW6UxGlpucJeAl0X6QhtX+W4pEyMedLZMkPMIb5Ql0+u+j3HOG1tIjB2bR+eavCf5vkyfKVfsavLGCnpE2pVmfRyqZjnnVt4JhoL5Y7sV5MX9RPzeGtMHAgQB+aUuoOuDqUrTLdodUeeoUBMYfKa4+NXvBMqGTESd1kksD+XqGsnMUg+KO424YCUVC57hTYo4V5ZNe9mKbgYdBggFEVSnKIXASjft6dUZqc1SxQUtcERclFQeggc4YBSmqUnM1E3g5llmC+c4zYdV4EORymRCbUZRQz1QA4lDNlAfrGgSVvU80neLwklnQoodGaSwh13jklOyJoySEbiRq3KncdVxtr1ePg3qSn2b4pfB5SgBrdAjqgSyF/O5QAje0snSxADoAREIsXK/XH/PQ/oj35lFq91p/TVCoH3MMYnUsWem+VMnyzkejvhhj4EppgzuNx5MzITTv0B/sO//EACoQAQACAgEEAQQCAgMBAAAAAAEAESExQVFhcYGREEChwVCxMPAg0fHh/9oACAEBAAE/If5y3UVrD+CYH623CsDhCzq8t+gyxhZaMu+UUfnBx/A9Z3dCUc1W71GYEvLgurd2e/rhl7JfHVDAMq1HCcLY2Rz0AVhOjKLWheF/Ct/Alf2mllfVJXxR6xS6btuqT5/NBnxwzaA2jAMrKE+ri3SrsvJQDjKwvbbqEQ8jkxSPOzyy0lvdh9HST9zT4C22ag39ypxB5+A2XgbvFNV3uJHdPwh2Cc8Sp5s98SvpCl/oiWhJ4RwG00DKxOyyJ3rkdYgBRlYwoUcEbU/ZH4dHXMaVYriCWTNAI/SMtr1c5sau+0T8PTIrttisDYzCq83K7kJs2xwiCaHn7ljGCD2qLdzgbm9HUL2sZRtl1ud5Alh/ExshQ0/IEIUU9e2dxH1CLN/KogtMchH6OV79QGjQrvABBoFBHXHv3FxI/MYVihpZzx2qA6tTelcVk2axCELuGWzSvo7oxq1LWgu0nBzMUAmwDQZRRRHUaBPbz11h9xBR/MrPHHWEj6TXI3E8+vtDuImbZRvHn3GC6AAoYKGTll/hmcrZscsu2X3QKGvEBQfEo82nsNdEDhrftQXhicBQfH0bOX1DliDS2rVmDjYgLw7iZo3DJW+ACw8UwOj8v7mD1lFzheaehPRYjXXH3lJVaUP7S+K41+w9+8FPE2XYAUhb9kVYP+s47Z6bCW9IH2gXFyvrvszX3CXmUoC5krqodnsbELlkHm0EvlE8YKMf4NriL9ympQ1Lf+k1O6ZNT4DXCreLsbrX7NYb7vVGIG7De/trGxaWg/RnmNCzIdLKIql5O7ZWKzSVWvA1QAASun+Rs7tVUdgIWf8AspylfdeNWZS5WtGAetzLSNJwHeEYqz5ustOz19s1FPlWmPkZ7S6lbNuffz9ws4ly+0uXW5cr0S55RGBL6XLPrZteobd249S4Olyx7X+rhE1WBLyRk/HpbQq1lACoD7bBiWNwifmC/wCI36FBMAKyY/DVj8KJHaN71/ghNsTCoe6RngW+b2+FBds5KhlS9Lf2zRFWUVBrL5x6BM48M+7LPzCCx3QUez82sSsAiQlpVgvGt/JMfy2hvjN9TAqGbfFZwbRD9jDf2LFZzGB0mZIGxo9hjgIfGgwAVAFH2x6PrZ8CjMC/57aOOijjHLcaQzZaetV0aha0hqAVdMf2MyRA3HI8+f8Aq/mLLBsvvugRyPKtfJY8XDku7tXEcwmvagOq4/tJQN8rYfB/3OZWAPd+mQJiX5INZJSX1RPhV/dZrxMspig9Qor+UeLAaKwVJxWWoE5gBXr9uhXsJbM7YjAt225wFwrf/I6x4zxoNjt2ghSnD+9zpliwvtS+pfz2H9TN95ts43X+0hR81+O/2o/nUej2uvxKpCxC+WvxKzNwWOiyvjg3DGti0rrhS7NUxyuEmjbjs2QMp8La8MILbZNZk2Hr5iz1ki6TzKAu/wAIfcWPQqDrk9eyK62PIzJdlMKXWIbMNS4QC5Hnoh/9nKQI7ri0lyFu8s/aMcAorBvJR88zCBhR6H9Xczjpk3mhzqNUldvrYyu2VKx3TL/qLefgIpLK5Xl5iyjEuG5y0TQ1t0uN4PU1KsIcy7mKHWcZj3lUcSw9RPuLQx84VoDKOAlbUAvTiboJd7aJV1aDRY3V2pXniP1S2p/1KDIMAJSM6AxBlG9SDq8Sv9xSz4B8QlTtfvCBx/jna89Sxcy2QALgDQL6B9SqusJHrmKIfXYXNlfEVq9QsIdBFQ2hKh1+2Rt0gXWkcFQ6QKOywBUFCwHT6X2gnMa7jPCP/IjWlyDQXrmWBo3oKwRxGbgVdrw29DEW75C4b4qwD3gHX5UZi+hwMeVWUKfbBa3i/XMAGlDK7Hj8n1U/Ep0WtALx21sDXJNwO4EDQLlBlvpjzf46I6tbNoH/ABTh8ZlqV+UOA5FivQcv0AlLBdrhLFFlazWVFbBLzOYxK7/b0vVRm+IkOhxg2B7fQlCLDCFJF88oBXpQKBrrHEr6/Tt0M5X1SpeCoHf6PZH1ICxoPMJE21bdUlj3G4q0Fdq2Z+zprYym1O4AtGRWlpCV4awtFwHYZh9yyC9Dcf8AaKbcpxeorn8XFljpEXpKyQjhOpW4obY9D+YwuA2updKCKG0tDkHRwzdrU442tT5bEGvit2+GBX1ioLgy6LU3z5pWiKaidFRgS1AtziALzi4Gn+a63/mz5ZpLkf8AEXy1F3ACBeh3iuIZw5oWnFbNRNdKq/eZg9VYo+H3jWXrLPqDTQNK2gz2lGSUGzf2Z9ooFyxyfw9Sv5z/2gAMAwEAAgADAAAAEAAAAAAAAAACAAAAAAAAAAAAAAAAAKFGAAAAAAAAAAAAAAACJHBHLIKAAAAAAAAAAAAOOIJLFCNBOAAAAAAAAAAKOAAAAMADIAAAAAAAAAAHGIABOLGBAAAAAAAAAAAADEOPPBPKAAAAAAAAAAAKJAAPMKGFAAAAAAAAAAFIAECABIAKAAAAAAAAAAENFDJBAGAAAAAACAAAAAAMEIBKAAAAAAAAEAAAAAAAAAEIAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8QcP/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8QcP/EACoQAQEAAgIBAgUEAwEBAAAAAAERACExQVFhcRBAgZGhIFCx8DDB0eHx/9oACAEBAAE/EP3cR2fpaRr398qlNNKD/D/erg0p+wrZx6d5p4++vixHUtyRrSKoi7or2EAwMzYUiJNNJSgWrctYfsA0pgPtYF9diFRRvrlsTGA+HBV27W6s+FLKXxjkc7gLA5VDEAFSqrSQAW6ackq1BmCi4ypK+vTfffz6z4RCwC4tDC4ykRiuO62FZZMgXlo4NY8vniAVqln0xJ1p4FTkxAxQAKlSRncOoiebgBGbU0aoCyIxYIKRswypeBR5ABSqgCriv3wbszjQzi3l4OvXBWWqE+tDYe8zmM5ZHr5klj0Lrb9sILZ+wuwheUJ0ZrCAEHk1jeI0Rhzr74FakaKqG6Q0ZO0QH6nwnPzXojv7TbWgEL4xwBQAKlOzwYRhCVqFKjlywO8/EYEITxi4ZaD0DquyIA6ooh+ct0IcA5VXQduNGQyLSQAqqkbwRMx2kTscKRwc8ajRuOQRGBmz0mbCKlfL8VDb8t4jowtagzBsMiHceBrfNIAIC+m5v581Ps4URdVHFRGBaTSuOpl+CfqjYVaKPaNqSU0agPibSbjeh9FKWDy0ELGDIilgwQgAcAaJ1ioBT7DQ/vticILCrCRLBzDTClygCGqMtubUdyvJEoagPAqDqAZNOVOYRZYpwZZib4B5MIKjBqjW8MLJhFogCDuixIGSiSY/+Hf2xlEpFivtwcYTb54SfX29cYSxoYTkg2mKLCdjv5SiwmWkF4Y8t4MvktZYC9qDDmwQMVWIC4lXXoaktEFzjI0FM6Kujrx4QvRJEQPGn0Mm7vO22gWpQDXCg/WkKAtYAN7wIQyA6O+jzhWKBDEG1AE9jDlQQIOgCADo+mCShVd+k19sSImm57/8wM5qgAFuCLTYauBpXLmgIjBBTe6Zyj0i43b3wvXO8YnJ929Fv1w2AbC3kZBaqzoUmy+xWqawYAtSBpjsPNe1eJBoTuCCBfPyhuwE2mMZZvUTZIxrW2PAVdfBhBiabTeaM2E9VVJqEzSAbRwp9Hd/P+CJvh/7/wBxIXquDn+/wYueXn++2AIA9jGBCcc0n05cKtCVSCiBuohDUDLUUH7K2GNDZUAEACgVw1xxgQh8olI5qNA+MFm0Tm8F5wckMU4T9jIgxgYBqsgMCgKkAAABhKq5d/FQ2/BQ2/riIecCcQWhF0UFwTYVxiKyaBE8DKpHruXADYKNHIbwfLFBtcwmg8K28/LCcXASGNeUZ2B3irDGO0sNq7HlrACdON84B4ME7PyxnSQ8vGUgRnP18UwR5N+TONCnmmRZ43R1gKkFeWeZ4wbh+AjszZRxY0KKpkeXHGUXOEHFOdL3AHaDCu3KzKrgDANVowDblIOD+ADm+fligoqJ6GKnq0OUb+9oyrE251Vm8B7Td64Xjd74ySbd3B8UfzkgWHqJseAJIbmzSckSdc70QE6Oen9D1wyB7Avi7GNEqoj0BF06k9cK4Nij1aeWSyPeEigs9zpo3Wn0yQSk9oKMRQ37NeTyCbEoDqq3RGSh4Q1mvW/8djfOmHjQkgsimOXWTlBnnWymdIBQAE2g5eboK2S+4ZdtNAB4h7f01gHiOPltk/JQEkZqHPOBL/LLAohtGR2mKzD1eulYtaSyPZe1xHU+vv0wB0l56JqnaOucGAY8DAc7N+XNAHAVWSwin2Z6Y4qhVT5Xex9eWwYWLNEPpI++jdgXuDoQ75ak9KwnwBvbIJjRe2nWJOg2b3ofEaE9MEIJ5QUWwANiUuICwC6V4elqQc+cMpsagldIRhZmyes94oB/PAUWGaXv3y9/XAQu1a/LrngvFQTRXCJrK0sQkUcZhdu4AApMgWpXKCwp3tcI5QMV9wlyB9ATlmwEScp981ZxBjXO4G+fzSgYIWwoBBH5ed7a4sMjI+yIH6cospBCpqLxpL54HXSC66pm0oWBvRE8iLIS6LoqPF142ZHW4Fax3t/0yY0lDKuAXAACAUwywsl6z1KuVc0ItBs5xR4vgbw/VDRxwCnHAAAAgJT5h23SIPUmdjC67rGonDeadJvybMlCACGqPaxZRIxHDlAZ4HrKzRtu7benc5TSabTA4Ya4ifms4KGLjun1Oz0ygoH6gAG/4Gyi6k471aEn0PO96PGbnI+6NGsCpVTzzvd3dIh1jXFuqmYgIKOvJSM7AmovQq8VUC4akpOQJxvDBcVZoqJaUK3nD98Al7hCzlWHMwkQlzCiiJ64LXXy9yRcvB3gxtfALkGWTRdYbwLrmMbMK6FPgHFgVgAAsA+AtvXkr7r5wlLASB6Ez03Nz7DWHQxsI/3jJTknU/Q/1xfQtk3/AA/GdUIIj52tyKN5y6hEHY+uI1eLo0MIIVE6DA73v1+HNOnoRAUGM4xGbKcpsQkUtXCYETbAFhkkAKAIodGjx8sevRP0M1MKPRELpsilgSAPPiDAAOAJo6+Cxnh5wHQ2wjziNF1DRWr48d+fTB2UdI9WX+f1IokyvQAbXoZzJZCLlQSBaJh2K9bfo6JbaIl3BFkg2FRRZbSjXhCIWIpsJvcNVaARTQT5bQsKVOk/2yWK/qRW1tQrz8/FWunfQhpQl5M4I6eokKIEapdXHDU+hNgULQ7dDAQgR9X5FQViJ+i96nvjAkrQMV8GHH0w9muITQGtw3gvVCZmxC4YoOyYTvXqUFtYwACEJO6oM2Q6jQNvGEkF9W/L3Qm2qdMp+MiKqNa2O/UgLiYqVnfHf9vwqLRsuT7i5VsICtCkFA1hXZDLk4tCyABiAUhiJFc9nwENbeHW8pqqSeYohw6vjN9ziXauXTY8imy3fSH05AaCQEnC7Bup2qBqAHJ1veEuJQionN2AB3zvAwrZwvPff1+ZVNtdH1/7+M376LeX0ViUgTgQobGgIZ44wuuqKgCkfCVHt/5hwQeQUHI0EpaLZ51v8+MFzF1QHO113w4db555QYRF6hyJnECga2OmDfim9BBWvu4B6dg6DyzbKnuaohr34AgPVe6WfO6ugCsyA5qQA+85+v1uCJrWzx/mYX8P8yBHd4ZgCwbHo7QbeyHbvbi+l6NbRCgEQAADkiUmiD74LmfxDJDnc5N6Ia3yOHtI3UmySqky0ndwW8jVVAWBgxSLy8vpzcGEa2+F8zi5A4PkUpMEJflFCdHOABBHh/Z0I+uACQhxD98//9k="/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Image Name" name="image_name" />
                <Form.Control type="text" placeholder="Author" value="Kent" name="author"/>
                </Form.Group>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            </Modal.Body>
            </Modal>
            <DataComp />
          </Container>
      </div>
    );
  }


export default Dashboard;
