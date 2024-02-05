import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:pufflings/pages/cat_page.dart';
import 'package:pufflings/models/cat.dart';
import 'package:pufflings/providers/cat_provider.dart';

class CatsHome extends ConsumerWidget {
  // Tell flutter we are overriding the default build method and supplying our own.
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // WidgetRef is a reference to global state and is given to the build method
    // by riverpod. This allows us to call ref.watch on the following lines.
    // calling ref.watch will allow us to react to new state changes (all handled by riverpod).

    // Cats provider will handle fetching the list of cats AND managing the state we are in.
    // We can be in a data state (which means we have successfully fetched data).
    // We can be in an error state (which means something has gone wrong and we can
    // display a friendly error message).
    // If we aren't in either of those two states, we are in a loading state.
    final AsyncValue<List<Cat>> cats = ref.watch(catsProvider);

    // Scaffold out a new page and add an app bar and a body to the page
    return Scaffold(
      appBar: AppBar(
        title: Text('list of cats'),
      ),
      body: Center(
          // switch means that we will do different things based on the state of the
          // catsProvider. If data we'll run the asyncData method. If error, run the Async
          // error method. if not, run the default which will show a circular spinner
          child: switch (cats) {
        AsyncData(:final value) => ListView(children: [
            for (var cat in value)
              Card(
                  child: ListTile(
                      title: Text(cat.name),
                      subtitle: Text(cat.color),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => CatPage(id: cat.id)),
                        );
                      }))
          ]),
        AsyncError(:final error) =>
          const Text('Oops, something unexpected happened'),
        _ => const CircularProgressIndicator(),
      }),
    );
  }
}
