import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:pufflings/pages/cat_page.dart';

class CatsHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('list of cats'),
      ),
      body: Center(
          child: ElevatedButton(
        child: Text('single cat view'),
        onPressed: () {
          Navigator.push(
              context, MaterialPageRoute(builder: (context) => CatPage()));
        },
      )),
    );
  }
}
