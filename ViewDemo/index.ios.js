//'use strict'

var  React = require('react-native');

var {
    AppRegistry,//注册App入口
    Component,
    StyleSheet,//创建样式表
    View,
    PixelRatio,
    Text,
    } = React;

//创建组件
var demo = React.createClass({
  render:function() {
    return(
      <View style={styles.flex}>
        <View style={styles.container}>
          <View style={[styles.item,styles.center]}>
            <Text style={styles.font}>酒店</Text>
          </View>
          <View style={[styles.item,styles.lineLeftRight]}>
            <View style={[styles.center,styles.flex,styles.lineCenter]}>
              <Text style={styles.font}>海外酒店</Text>
            </View>
            <View style={[styles.center,styles.flex]}>
              <Text style={styles.font}>特惠酒店</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[styles.center,styles.flex,styles.lineCenter]}>
              <Text style={styles.font}>团购</Text>
            </View>
            <View style={[styles.center,styles.flex]}>
              <Text style={styles.font}>客栈.公寓</Text>
            </View>
          </View>
        </View>
      </View>
      );
  }
});

var styles;
styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    height: 84,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 2,
    backgroundColor: '#FF0067',
  },
  item: {
    flex: 1,
    height: 80,
  },
  center: {
    justifyContent: 'center', /*垂直居中*/
    alignItems: 'center'/*水平居中*/
  },
  flex: {
    flex: 1
  },
  font: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  lineLeftRight: {
    borderLeftWidth: 1/PixelRatio.get(),
    borderRightWidth: 1/PixelRatio.get(),
    borderColor: '#fff'
  },
  lineCenter: {
    borderBottomWidth: 1/PixelRatio.get(),
    borderColor: '#fff'
  }
});
//上面的代码共创建了两个样式表：container和item。container作用于最外层的View组件。

/*注册App入口*/
AppRegistry.registerComponent('Demo',()=> demo);