import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';
import 'package:pufflings/pages/cats_home.dart';

class CatPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('detail of single cat'),
      ),
      body: Center(
          child: ElevatedButton(
        child: Text('go back to cats view'),
        onPressed: () {
          Navigator.push(
              context, MaterialPageRoute(builder: (context) => CatsHome()));
        },
      )),
    );
  }
}
