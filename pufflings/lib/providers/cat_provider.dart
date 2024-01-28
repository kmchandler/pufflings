import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:pufflings/models/cat.dart';

part 'cat_provider.g.dart';

@riverpod
Future<List<Cat>> cats(CatsRef ref) async {
  // Using the package http, fetch a list of cats from the server
  final response = await http.get(Uri.http('localhost:3000', 'cats'));
  // Using dart:convert package, we make the response a list of map objects
  // a map is a key value pair like a regular objects
  final jsonList = jsonDecode(response.body) as List<dynamic>;

  // finally, convert the list of map objects into a list of Cat objects
  return [for (var elem in jsonList) Cat.fromJson(elem)];
}
