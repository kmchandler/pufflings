import 'package:freezed_annotation/freezed_annotation.dart';

part 'cat.freezed.dart';
part 'cat.g.dart';

@freezed
class Cat with _$Cat {
  factory Cat(
      {required String name,
      required String color,
      required DateTime createdAt,
      required DateTime updatedAt}) = _Cat;

  /// Convert a JSON object into a [Cat] instance.
  /// This enables type-safe reading of the API response.
  factory Cat.fromJson(Map<String, dynamic> json) => _$CatFromJson(json);
}
