 $(document).ready(()=>{
        $('button').click(()=>{
          const name=$('#nameid').val();
          $('#imgid').attr('src',`https://joeschmoe.io/api/v1/${name}`)


        })
      })
