<template>
    <div id="application">
        <table-ui>

        </table-ui>
    </div>
</template>

<script>
    import TableUI from './components/TableUI'

  export default {
      components:{
          'table-ui': TableUI,
      }
  }
</script>

<style>
    .flexbox-row{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    ul{
        list-style-type: none;
        padding: 0;
    }

    .application{
        display: flex;
        justify-content: center;
    }

    .cols{
        display: flex;
        width: 20%;
        flex-shrink: 1;
    }

    body{
        font-family: Source Sans Pro;
        font-style: normal;
        font-size: 14px;
        line-height: 24px;
        background-color: #F2F2F2;
        color: #3D374A;
    }

    .text-button{
        box-shadow: none;
        background: none;
        border: none;
        height: 32px;
        cursor: pointer;
    }

    .common-button{
        background: none;
        box-shadow: none;
        border: 1px solid #D5DAE0;
        height: 32px;
        border-radius: 2px;
        cursor: pointer;
    }

    .selected-button{
        border-radius: 2px;
        background-color: #00A11E;
        color: white;
        border: none;
        height: 32px;
        cursor: pointer;
    }

    .disabled{
        opacity: 50%;
    }

    .checkbox-container{
        padding-left: 37px;
        padding-right: 30px;
        display: block;
        position: relative;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        bottom: -8px;
        left: 37px;
        height: 14px;
        width: 14px;
        border: 1px solid #C6CBD4;
    }

    .checkbox-container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    .checkbox-container input:checked ~ .checkmark {
        background-color: #00A11E;
        border-color: #00A11E;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .checkbox-container input:checked ~ .checkmark:after {
        display: block;
    }

    .checkbox-container .checkmark:after {
        left: 4px;
        width: 5px;
        height: 8px;
        border: solid white;
        border-width: 0 1px 1px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .spacer{
        flex-grow: 1;
    }

    i {
        border: solid black;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
    }

    .right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }

    .left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }

    .up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        margin-bottom: 2px;
        border-width: 0 1px 1px 0;
        margin-left: 5px;
    }

    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        margin-bottom: 2px;
        border-width: 0 1px 1px 0;
        margin-left: 5px;
    }


</style>
